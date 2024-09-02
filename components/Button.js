

export default function DMButton({children}) {
    return (
        <div className="border-2 border-white px-2 pb-1.5 pt-0.5 hover:cursor-crosshair">
                    <a href="https://glorious-impact-532915.framer.app/contribute">
                      <p className="float-right font-SaansMed text-[18px] text-white">
                        {'↗'}
                      </p>
                      <p className="font-SaansMed text-2xl leading-[1em] text-white">
                        {children}
                      </p>
                    </a>
                  </div>
    )
}