import Image from 'next/image';
import BackSVG from './../../../public/back-button.svg'
import ChoizSVG from './../../../public/choiz-black.svg'
import ContactSVG from './../../../public/whatsapp.svg'

interface HeaderProgress {
  step: number;
  maxStep?: number;
  onBack: () => void;
}

export function HeaderProgress({ step, maxStep = 6, onBack }: HeaderProgress) {
  const progress = (step / maxStep) * 100;

  return (
    <div className="relative w-full mb-8">
      <div className='flex justify-between mb-4'>
        <div className='cursor-pointer pr-4 py-4' onClick={onBack}>
          <Image src={BackSVG} alt="back_icon" height={20} />
        </div>
        <Image src={ChoizSVG} alt="choiz_icon" height={28}/>
        <Image src={ContactSVG} alt="contact_icon" height={24} />
      </div>

      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-choiz transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
