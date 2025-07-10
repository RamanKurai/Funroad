import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Homepage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>Iam a Button</Button>
        </div>
        <div>
          <Input placeholder="Iam an Input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder="Iam a Text Area" />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
