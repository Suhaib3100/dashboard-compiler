import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import avatar from "@/public/images/avatar/avatar-2.jpg";
import img1 from "@/public/images/all-img/email-1.png";
import img2 from "@/public/images/all-img/email-2.png";
import img3 from "@/public/images/all-img/email-3.png";
import Image from "next/image";
import { Mail } from "@/app/api/email/data";

const images = [img1, img2, img3];

const MailDisplay = ({ mail }: any) => {

  return (
    <div className="flex h-full flex-col px-6 mt-2">
      <div>
        <div className="text-lg font-medium text-default-900">{mail?.data?.subject}</div>
        <div className="flex items-center gap-2 mt-6">
          <Avatar className="h-11 w-11">
            <AvatarImage src={avatar.src} alt="" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium text-default-900">
              Esther Howard
            </div>
            <div className="text-sm text-default-600">
              esther.howard@gmail.com
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="space-y-4">
            <div className="text-sm text-default-600">Hi Jane Cooper,</div>
            <div className="text-sm text-default-600">
              Jornalists call this critical, introductory section the "Lede,"
              and when bridge properly executed, it's the that carries your
              reader from an headine try at attention-grabbing to the body of
              your blog post, if you want to get it right on of these 10 clever
              ways to omen your next blog
            </div>
            <div className="text-sm text-default-600">
              posr with a bang With resrpect, i must disagree with Mr.Zinsser.
              We all know the most part of important part of any article is the
              title.Without a compelleing title, your reader won't even get to
              the first sentence.After the title, however, the first few
              sentences of your article are certainly the most important part.
            </div>
            <div className="text-sm text-default-600">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
              ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet adipiscing
              sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm text-default-600">Best regards,</div>
            <div className="text-sm text-default-600">Esther Howard</div>
          </div>
        </div>
        <div className="border border-dashed border-default-300 mt-6 mb-5"></div>
        <div className="text-base font-medium text-default-900">
          Attachments (3){" "}
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          {images.map((item, index) => (
            <div
              className="w-[280px] h-[180px] p-2 bg-default-100 rounded-md relative"
              key={`email-details-image2-${index}`}
            >
              <Image src={item} alt="" className="h-full w-full bg-cover" priority={true} />
              <Link
                href={item.src}
                target="_blank"
                className="h-6 w-6 bg-default-100 rounded absolute top-4 right-4 flex justify-center items-center"
                download={true}
              >
                <Download className="w-3.5 h-3.5 text-primary" />
              </Link>
            </div>
          ))}
        </div>
        <div className="border border-dashed border-default-300 mt-6 mb-5"></div>
        <div className="flex items-center gap-4 pb-5">
          <Button>
            <Icon icon="heroicons:arrow-uturn-left" className="w-4 h-4 ltr:mr-1 rtl:ml-1" />{" "}
            Reply
          </Button>
          <Button variant="outline">
            <Icon icon="heroicons:arrow-uturn-right" className="w-4 h-4 ltr:mr-1 rtl:ml-1" />{" "}
            Forward
          </Button>
          <Button size="icon" className="rounded-full" variant="outline">
            <Icon icon="heroicons:face-smile" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MailDisplay;
