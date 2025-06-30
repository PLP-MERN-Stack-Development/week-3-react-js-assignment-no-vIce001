import { Card } from "./ui/card";
import Button  from "./Button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Label } from "./ui/label";

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <Card className="flex items-center justify-between gap-4 p-4 mb-2">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>
            {task.text.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <Label
          className={`cursor-pointer ${task.completed ? "line-through text-muted-foreground" : ""}`}
          onClick={onToggle}
        >
          {task.text}
        </Label>
      </div>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </Card>
  );
}