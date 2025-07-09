import React from 'react';
import {Button} from "@/components/ui/Button";
import {Send, MapPin} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

function GotQuestions() {
  return (
    <section className="w-full max-w-[1320px] flex flex-col lg:flex-row gap-16 px-8 md:px-12 lg:px-20">
      <div className="flex flex-col max-w-[480px] gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-3xl font-bold">Got questions? We’ve got answers.</span>
          <span>Whether you’ve got a concern, a suggestion, or just want to connect, we here for you.
            </span>
        </div>
        <div className="flex gap-4">
          <MapPin size={32}/>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-serif">Our office</span>
            <span>RTL204, Cebu Institute of Technology University, N. Bacalso Avenue, Cebu City, Philippines</span>
          </div>
        </div>
      </div>
      
      <form action="" className="flex flex-col p-7 gap-8 rounded-3xl bg-near-white shadow-md w-full text-dark-neutral">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email" className="!text-sm !font-normal ml-1">Institutional email</Label>
            <Input id="email" type="email" className="rounded-lg !bg-light-neutral h-10"/>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="id_number" className="!text-sm !font-normal ml-1">ID number</Label>
              <Input id="id_number" className="rounded-lg !bg-light-neutral h-10"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="course" className="!text-sm !font-normal ml-1">Course</Label>
              <Input id="course" className="rounded-lg !bg-light-neutral h-10"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="year" className="!text-sm !font-normal ml-1">Year</Label>
              <Input id="year" className="rounded-lg !bg-light-neutral h-10"/>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="message" className="!text-sm !font-normal ml-1">Message</Label>
            <Textarea
              id="message"
              className="rounded-lg !bg-light-neutral min-h-[80px] p-2"
              rows={4}
              placeholder="Type your message here..."
            />
          </div>
        </div>
        <Button variant="default" className="w-fit">
          Send message
          <Send />
        </Button>
      </form>
    </section>
  );
}

export default GotQuestions;