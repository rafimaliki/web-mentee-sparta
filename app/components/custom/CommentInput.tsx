import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface CommentInputProps {
  comments: string[];
  setComments: (comments: string[]) => void;
}

export function CommentInput({ comments, setComments }: CommentInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (inputRef.current?.value) {
      if (inputRef.current.value.length > 42) {
        let newComment = "";
        for (let i = 0; i < inputRef.current.value.length; i++) {
          newComment += inputRef.current.value[i];
          if ((i + 1) % 43 === 0 && i !== 0) {
            newComment += "\n";
          }
        }
        setComments([...comments, newComment]);
      } else setComments([...comments, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input ref={inputRef} placeholder="Comment" />
      <Button onClick={clickHandler} type="submit">
        Add
      </Button>
    </div>
  );
}
