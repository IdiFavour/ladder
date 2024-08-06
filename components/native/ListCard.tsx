import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Mail {
  id: string;
  plays: string;
  odds: string;
  entryAmount: string;
  date: string;
  read: boolean;
}

interface LadderCardProps {
  item: Mail;
  onSelect: (mail: Mail) => void;
}

export default function LadderCard({ item, onSelect }: LadderCardProps) {
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
      onClick={() => onSelect(item)}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{item.plays} Plays</div>
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
        <div className="text-xs font-medium">{item.odds} odds</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {item.entryAmount} entry
      </div>
      <Badge>{item.date}</Badge>
    </button>
  );
}
