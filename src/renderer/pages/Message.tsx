import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
// import { useSpeechRecognition } from 'react-speech-kit';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognizer = new SpeechRecognition();
speechRecognizer.continuous = true;
speechRecognizer.interimResults = true;
speechRecognizer.lang = 'en-US';

const Message = () => {
  const [message, setMessage] = useState<string>('');
  const [listening, setListening] = useState(false);
  const recorderControls = useAudioRecorder();
  // const { listen, stop, listening } = useSpeechRecognition({
  //   onResult: (result: string) => {
  //     console.log(result);
  //     setMessage(result);
  //   },
  // });
  useEffect(() => {
    let finalTranscripts = '';

    const handleTranscript = (event: any) => {
      let interimTranscripts = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;
        transcript.replace('\n', '<br>');
        if (event.results[i].isFinal) {
          finalTranscripts += transcript;
        } else {
          interimTranscripts += transcript;
        }
      }
      console.log('Inter');
      console.log(interimTranscripts);
      console.log('Final');
      console.log(finalTranscripts);
      setMessage(finalTranscripts);
    };

    speechRecognizer.addEventListener('result', handleTranscript);

    return () => {
      speechRecognizer.removeEventListener('result', handleTranscript);
    };
  }, []);

  const sendMessage = () => {
    window.electron.ipcRenderer.sendMessage('send-message', message);
  };

  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);
  };

  return (
    <div className="pt-7 px-7 flex flex-col h-full">
      <h1 className="text-3xl font-bold text-white mb-5">Send your message</h1>
      <textarea
        className="rounded-md h-[100px] w-full outline-0 text-white p-4 bg-p-black-3 resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="text-white rounded-lg bg-p-black-3 px-6 py-3 font-medium mt-4"
      >
        Send
      </button>

      {/* <div className="m-auto">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          recorderControls={recorderControls}
        />
      </div> */}

      <button
        className="p-4 rounded-full bg-p-black-3 flex items-center justify-center m-auto"
        onClick={() => {
          if (listening) {
            speechRecognizer.stop();
            setListening(false);
          } else {
            speechRecognizer.start();
            setListening(true);
          }
          // if (listening) {
          //   stop();
          // } else {
          //   listen();
          // }
        }}
      >
        {listening ? (
          <FaStop className="text-white text-[40px]" />
        ) : (
          <FaMicrophone className="text-white text-[40px]" />
        )}
      </button>
      {listening && <p className="text-white mt-4">Listening...</p>}
    </div>
  );
};

export default Message;
