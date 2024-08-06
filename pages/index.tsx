import { Inter } from "next/font/google";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, mails } from "@/data/data";
import LadderCard from "@/components/native/ListCard";

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
  return (
    <div
      className={`w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen  ${inter.className}`}
    >
      <div className="flex  items-center justify-center py-12">
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
      <div className=" flex p-4">
        <div className="w-full">
          <CardTitle className="px-2 pb-4">Ladder list</CardTitle>
          <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 p-2 pt-0">
              {mails.map((item) => (
                <LadderCard key={item.id} item={item} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* <div className="bg-muted flex border items-center justify-center py-12">
          <CardTitle>Ladder view</CardTitle>
        </div> */}
      </div>
    </div>
  );
}
