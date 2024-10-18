"use client";

import Card from "@/components/ui/card-snippet";
import { Label } from "@/components/ui/label";
import { CleaveInput } from "@/components/ui/cleave";

import {
  InputGroup,
  InputGroupText
} from "@/components/ui/input-group";
import { inputMask } from "./source-code";

const InputMaskPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Input Mask" code={inputMask}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Label className="mb-2">Credit Card</Label>
            <CleaveInput
              options={{ creditCard: true }}
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div>
            <Label className="mb-2">Credit Card</Label>
            <InputGroup>
              <InputGroupText>MY (+6)</InputGroupText>
              <CleaveInput
                placeholder="Phone Number"
                id="phoneNumber"
                options={{ phone: true, phoneRegionCode: "US" }}
              />
            </InputGroup>
          </div>

          <div>
            <Label className="mb-2">Date</Label>
            <CleaveInput
              id="date"
              options={{ date: true, datePattern: ["Y", "m", "d"] }}
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div>
            <Label className="mb-2">Time</Label>
            <CleaveInput
              id="time"
              options={{ time: true, timePattern: ["h", "m", "s"] }}
              placeholder="HH:MM:SS"
            />
          </div>
          <div>
            <Label className="mb-2">Numeral Formatting</Label>
            <CleaveInput
              id="nu"
              options={{ numeral: true }}
              placeholder="10,000"
            />
          </div>

          <div>
            <Label className="mb-2">Blocks</Label>
            <CleaveInput
              id="block"
              options={{ blocks: [4, 3, 3], uppercase: true }}
              placeholder="Block[1,4,7]"
            />
          </div>
          <div>
            <Label className="mb-2">Delimiters</Label>
            <CleaveInput
              id="delimiters"
              options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
              placeholder="Delimiter: '.'"
            />
          </div>
          <div>
            <Label className="mb-2">Custom Delimiters</Label>
            <CleaveInput
              id="customDelimiter"
              options={{
                delimiters: [".", ".", "-"],
                blocks: [3, 3, 3, 2],
                uppercase: true,
              }}
              placeholder="Delimiter: ['.', '.', '-']"
            />
          </div>

          <div>
            <Label className="mb-2">Prefix</Label>
            <CleaveInput
              id="prefix"
              options={{
                prefix: "+88",
                blocks: [3, 3, 3, 4],
                uppercase: true,
              }}
              placeholder="+88"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InputMaskPage;
