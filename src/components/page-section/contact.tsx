import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID : string = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const templateID : string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
    const publicKey: string = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;
    
    if (!form.current) return;
    if (!serviceID && !templateID && !publicKey){
      console.log('env file not found');
      alert("service not working");
      return;
    }

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        {
          publicKey: publicKey,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');

        },
        (error: { text: string }) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center items-center gap-3 mt-4 md:mt-8">
        <h3>
          <Badge variant="default" className="text-sm">
            Contact
          </Badge>
        </h3>
        <p className="sm:text-5xl text-3xl tracking-tighter font-bold">Get in touch</p>
        <div className="w-full max-w-md p-4 bg-slate-900 rounded-2xl shadow-md">
          <form
            className="flex flex-col gap-2"
            name="form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                className="bg-slate-950 w-full py-2 px-2 rounded-[12px]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                className="bg-slate-950 w-full py-2 px-2 rounded-[12px]"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="bg-slate-950 w-full py-2 px-2 h-24 rounded-[12px]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="p-2 bg-indigo-500 rounded-[12px] cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;