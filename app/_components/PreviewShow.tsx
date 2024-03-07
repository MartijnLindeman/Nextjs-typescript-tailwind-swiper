import Image from 'next/image';

import * as React from 'react';
import { PreviewType } from './Previewtype';

type PreviewShowProbs = {
  onShow: PreviewType | null;
  fnoo: (param: PreviewType | null) => void;
};

export default function PreviewShow(probs: PreviewShowProbs) {
  return (
    <div
      className={`absolute w-full h-full left-0 top-0 flex justify-center items-center z-30
  ${probs.onShow ? 'block' : 'hidden'}`}
    >
      <div
        className={`bg-black/50 w-full h-full z-10 cursor-pointer`}
        onClick={() => probs.fnoo(null)}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
      {probs.onShow && probs.onShow.img && (
       <Image src={probs.onShow.img} alt="" className="max-w-xl" />
        )}
        <p className="font-bold bg-white p-2">
          {probs.onShow ? probs.onShow.place : null}
        </p>
      </div>
    </div>
  );
}
