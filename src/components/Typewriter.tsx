import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";

interface TypewriterProps {
  className?: string;
  strings: string[];
  loop: boolean;
  preceedingText?: string;
  delayAfterWriting?: number;
  delayAfterRemoval?: number;
  typingSpeed?: number; // [wpm]
  removalSpeed?: number; // [wpm]
  autoStart?: boolean;
  cursorChar?: string;
  reserveSpace?: boolean;
  placeholderChar?: string;
}

export default function Typewriter({
  className,
  strings,
  loop,
  preceedingText,
  delayAfterWriting = 500,
  delayAfterRemoval = 250,
  typingSpeed = 40,
  removalSpeed = 140,
  autoStart = true,
  cursorChar = "|",
  reserveSpace = false,
  placeholderChar = "s",
}: TypewriterProps) {
  const hasRun = useRef(false);
  const typingSpeedCps = (typingSpeed * 5) / 60; // The typing speed in characters per second, for more info see: https://www.yorku.ca/mack/RN-TextEntrySpeed.html
  const removalSpeedCps = (removalSpeed * 5) / 60;
  const [text, setText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [placeholderString, setPlaceholderString] = useState<string>("");

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const addChar = (char: string): void => {
    if (reserveSpace) {
      setPlaceholderString((prev) => prev.slice(0, -1));
    }
    setText((prev) => prev + char);
  };

  const removeChar = (): void => {
    if (reserveSpace) {
      setPlaceholderString((prev) => prev + placeholderChar);
    }
    setText((prevText) => prevText.slice(0, -1));
  };

  const removeChars = async (
    numChars: number,
    charsPerSec: number,
    delayAtEnd: number
  ): Promise<void> => {
    for (let i = 0; i < numChars; i++) {
      await sleep((1 / charsPerSec) * 1000);
      removeChar();
    }
    await sleep(delayAtEnd);
  };

  const writeString = async (
    string: string,
    charsPerSec: number,
    delayAtEnd: number
  ): Promise<void> => {
    for (const char of string) {
      await sleep((1 / charsPerSec) * 1000);
      addChar(char);
    }
    await sleep(delayAtEnd);
  };

  const start = async (): Promise<void> => {
    if (reserveSpace) {
      const longestStringLength = Math.max(...strings.map((str) => str.length));
      setPlaceholderString(placeholderChar.repeat(longestStringLength));
    }
    let writeStrings = true;
    while (writeStrings) {
      for (let i = 0; i < strings.length; i++) {
        await writeString(strings[i], typingSpeedCps, delayAfterWriting);
        if (!loop && i == strings.length - 1) {
          setShowCursor(false);
          writeStrings = false;
          break;
        }
        await removeChars(
          strings[i].length,
          removalSpeedCps,
          delayAfterRemoval
        );
      }
    }
  };

  useEffect(() => {
    if (!hasRun.current && autoStart) {
      hasRun.current = true;
      start();
    }
  }, []);

  return (
    <span className={`typewriter ${className ?? ""}`}>
      {preceedingText && (
        <span className="preceeding-text">{preceedingText}</span>
      )}
      <span className="text">{text}</span>
      {showCursor && (
        <span className="cursor blinking-cursor">{cursorChar}</span>
      )}
      {reserveSpace && (
        <span className="reserved-space">{placeholderString}</span>
      )}
    </span>
  );
}
