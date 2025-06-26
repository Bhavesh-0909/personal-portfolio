import { Badge } from '@/components/ui/badge'

function ContactPage() {
  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center items-center gap-3 mt-4 md:mt-8">
        <h3><Badge variant="default" className='text-sm'>Contact</Badge></h3>
        <p className='sm:text-5xl text-3xl tracking-tighter font-bold'>Get in touch</p>
        <div className='w-full max-w-md p-4 bg-slate-900 rounded-2xl shadow-md'>
          <form className='flex flex-col gap-2' name='form' action="" method="POST">
            <div>
              <input type="text" id="name" name="SingleLine" placeholder='Name' className='bg-slate-950 w-full py-2 px-2 rounded-[12px]' required />
            </div>
            <div>
              <input type="email" id="email" name="Email" placeholder='Email' className='bg-slate-950 w-full py-2 px-2 rounded-[12px]' required />
            </div>
            <div>
              <textarea id="message" name="MultiLine" placeholder='Message' className='bg-slate-950 w-full py-2 px-2 h-24 rounded-[12px]' required></textarea>
            </div>
            <button type="submit" className='p-2 bg-indigo-500 rounded-[12px] cursor-pointer'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage