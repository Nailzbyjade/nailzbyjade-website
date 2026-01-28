import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NailzByJade_FullScreen2() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen bg-pink-100 text-black p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-600">Welcome to my website</h1>
        <h2 className="text-3xl mt-3 font-semibold">♡ NailzbyJade ♡</h2>
        <p className="uppercase tracking-widest mt-2 text-lg">North London</p>
      </header>

      <div className="flex justify-center gap-6 mb-12">
        <Button onClick={() => setSection("home")} className="bg-white text-black px-6 py-3 rounded-xl shadow">
          Home
        </Button>
        <Button onClick={() => setSection("services")} className="bg-white text-black px-6 py-3 rounded-xl shadow">
          Services
        </Button>
      </div>

      {section === "home" && (
        <div className="max-w-4xl mx-auto space-y-10">
          <Card className="p-8 bg-white rounded-2xl shadow">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-4">Meet Me</h3>
              <p>
                Hey everyone, my name is Jade, I'm a self-taught nail technician based in North London.
                I enjoy making my clients feel pretty and pampered whether it's a simple or bold set.
                Your comfort and satisfaction will always be the main priority; I look forward to meeting you xx
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {section === "services" && (
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-white rounded-2xl shadow text-center">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-semibold">♡ Services ♡</h3>
              <p>Poly Gel Sets</p>
              <p>Press On Nails</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
