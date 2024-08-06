import { Inter } from "next/font/google";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, mails } from "@/data/data";
import LadderCard from "@/components/native/ListCard";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

interface MailListProps {
  items: Mail[];
}

export default function Home({ items }: MailListProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [plays, setPlays] = useState("");
  const [odds, setOdds] = useState("");
  const [betAmount, setBetAmount] = useState("");
  // const [mail, setMail] = useMail();
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const [selectedLadder, setSelectedLadder] = useState<Mail | null>(null);

  const handleLadderSelect = (mail: Mail) => {
    setSelectedLadder(mail);
  };

  const handleBack = () => {
    setSelectedLadder(null);
  };
  return (
    <div
      className={`w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen  ${inter.className}`}
    >
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-full gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Ladder Simulator</h1>
          </div>
          <Card className="w-full lg:px-10 border-none shadow-none">
            <CardHeader>
              {/* <CardTitle>Place Your Bet</CardTitle> */}
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bet-amount">Plays</Label>
                    <Input
                      id="bet-amount"
                      type="number"
                      required
                      value={plays}
                      onChange={(e) => setPlays(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button onClick={handleNextStep}>Next</Button>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="odds">Odds</Label>
                    <Input
                      id="odds"
                      type="number"
                      required
                      value={odds}
                      onChange={(e) => setOdds(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button onClick={handleNextStep}>Next</Button>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bet-amount">Entry amount</Label>
                    <Input
                      id="bet-amount"
                      type="number"
                      required
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button type="submit">Place Bet</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full">
        <CardTitle className="px-2 py-4"></CardTitle>
        <div className="px-2">
          {selectedLadder ? (
            // <Card className="h-[90vh] shadow-none">
            //   <CardTitle>{selectedMail.id}</CardTitle>
            //   <CardTitle>{selectedMail.name}</CardTitle>
            //   <CardTitle>{selectedMail.id}</CardTitle>
            //   <CardTitle>{selectedMail.id}</CardTitle>
            //   <Button onClick={handleBack}>Back</Button>
            // </Card>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Calculation Output</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {/* {...Array} */}
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div>5 x 2</div>
                    <div className="font-medium">10</div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>10 x 3</div>
                    <div className="font-medium">30</div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>30 x 4</div>
                    <div className="font-medium">120</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">Final Result:</div>
                  <div className="text-4xl font-bold">120</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleBack}>Back</Button>
              </CardFooter>
            </Card>
          ) : (
            <ScrollArea className="h-[90vh]">
              <div className="flex flex-col gap-2 p-2 pt-0">
                {mails.map((item) => (
                  <LadderCard
                    key={item.id}
                    item={item}
                    onSelect={handleLadderSelect}
                  />
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
}
