"use client";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { members } from "@/lib/member";
import Image from "next/image";

export default function MemberList() {
  return (
    <section id="members" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Our Cosmic Members
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 cursor-pointer aspect-square"
                >
                  <Image
                    src={"/member/" + member.avatar}
                    alt={member.name}
                    fill
                    className="rounded-lg border-4 border-purple-500"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] w-full bg-gray-800">
              <div 
              className="bg-gray-800 p-6 rounded-lg text-white shadow-lg text-center"
            >
              <div className="relative w-40 aspect-square mx-auto mb-4">
                <Image
                  src={"/member/" + member.avatar}
                  alt={member.name}
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="text-2xl font-semibold mb-2">{member.name}</div>
              <div className="text-xs">{member.DOB}</div>
              <div>{member.DOM}</div>
              <div className="text-purple-400 text-sm">{member.role}</div>
            </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
