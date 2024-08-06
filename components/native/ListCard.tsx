import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Mail {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  date: string;
  read: boolean;
  labels: string[];
}

export default function LadderCard({ item }: { item: Mail }) {
  return (
    <button
      key={item.id}
      className={cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left w-full text-sm transition-all hover:bg-accent"
        // mail.selected === item.id && "bg-muted"
      )}
      // onClick={() =>
      //   setMail({
      //     ...mail,
      //     selected: item.id,
      //   })
      // }
      onClick={() => console.log(item.id)}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{item.name}</div>
            {!item.read && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            )}
          </div>
          <div
            className={cn(
              "ml-auto text-xs"
              // mail.selected === item.id
              //   ? "text-foreground"
              //   : "text-muted-foreground"
            )}
          ></div>
        </div>
        <div className="text-xs font-medium">{item.subject}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {item.text.substring(0, 300)}
      </div>
      <Badge>{item.date}</Badge>
    </button>
  );
}
