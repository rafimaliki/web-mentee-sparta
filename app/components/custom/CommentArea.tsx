import * as React from "react";
import { CommentInput } from "./CommentInput";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface CommentAreaProps {
  id: number;
}

export function CommentArea({ id }: CommentAreaProps) {
  // const mockComments = [
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // ];

  const [comments, setComments] = React.useState<string[]>([]);
  return (
    <div className="flex flex-col w-10rem max-w-sm p-2 m-4">
      <ScrollArea className="h-72 w-full rounded-md border mb-2">
        <div className="p-4">
          <h4 className="mb-1 text-sm font-bold leading-none">Mentee-{id}</h4>
          <Separator orientation="horizontal" className="mb-2" />
          <div className="flex flex-col w-9rem space-y-2">
            {comments.map((comment, index) => (
              <p
                key={index}
                className="font-extralight break-words whitespace-pre-wrap text-justify"
              >
                {comment}
              </p>
            ))}
          </div>
        </div>
      </ScrollArea>
      <CommentInput comments={comments} setComments={setComments} />
    </div>
  );
}
