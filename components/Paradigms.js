import DMButton from '@/components/Button';

export default function Paradigms({
  setOpenNE,
  setOpenRC,
  setOpenSM,
  setOpenRE,
  setOpenCT,
  setOpenPC,
  setOpenPB,
  setOpenBR,
  setOpenCD,
  setOpenQD,
  setOpenETC,
  setOpenOD,
  setOpenBE,
  setOpenSG,
  setOpenCS,
  setOpenM0,
  setOpenNZ,
}) {
  return (
    <>
      <div className="side-display col-span-5 w-[400px] ">
        <div className="mt-20">
          <h2 className="heading-4xl pb-2 text-grey-3">Paradigms</h2>
          <p className="p-xl-regular max-w-[380px] text-grey-3">
            The Enlightenment, Industrial and Scientific revolutions created
            many advances for society. But what about their impact on deep ways
            of being and knowing? From the concept of thingification to the
            devaluation of mother earth, the psychological baseline of many
            societies was fundamentally altered. From our perspective, the
            worldview that condoned the treatment of land and living beings as
            disposable, exploitable resources, was also at play in the coding of
            our dominant socioeconomic systems. Dark Matter Labs sets out to
            reject the concept of separation and to reimagine our foundational
            economic relationships. For example:
          </p>
        </div>
      </div>
      <div className={`matrix-justify relative col-span-7 sm:w-[690px]`}>
        <div id="why">
          <div className="my-8 sm:my-20 ">
            <div className="mb-8">
              <h2 className="heading-4xl text-grey-1">Property</h2>
              <p className="p-3xl pt-4 text-grey-1">
                Words like property and ownership are often associated with
                ideas of dominion and control, allowing us to treat elements of
                the living world (such as land and rare earth minerals) as
                objects. Deep down though, do we really believe that timber
                holds more value than a forest? Or that a whale’s life is
                interchangeable with a barrel of oil? What would it mean to
                explore systems of organising that move beyond the paradigm of
                control?
              </p>
            </div>

            <div className="mb-8">
              <h2 className="heading-4xl text-grey-1">Technology</h2>
              <p className="p-3xl pt-4 text-grey-1">
                Emergent technologies can be framed as a threat, but they could
                also facilitate a new freedom to care. The field of quantum
                physics has enabled a granular visualisation of the
                shapeshifting and relational nature of living systems. Perhaps
                what we have previously framed as{' '}
                <a
                  className="underline"
                  target="_blank"
                  href="https://provocations.darkmatterlabs.org/the-necessity-of-a-boring-revolution-a71b1ae6f956"
                >
                  a boring revolution
                </a>{' '}
                is also an invitation to sense and see the world through a
                quantum lens. Perhaps in the future our governing institutions
                will exist to advance and scaffold the continuous learning of a
                self-aware system.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="heading-4xl text-grey-1">Money</h2>
              <p className="p-3xl pt-4 text-grey-1">
                Recognising that financial capital is intertwined and enabled by
                living and social systems is foundational to our work. Imagine
                how our relationship to finance might change if we understood
                the act of investing to be a commitment to our collective
                futures? What would a system look like where the ways of
                creating and stewarding money are decentralised and respectful
                of non-comparable value flows?
              </p>
            </div>
          </div>

          <hr className="text-[#333333]" />

          <div className="py-20">
            <p className="p-3xl-regular max-w-3xl pb-10 text-grey-6">
              Based on this new paradigm we are proposing three worldview
              philosophies that we think could underpin a desirable future
              economy. From there, we have identified six structural shifts that
              we are hypothesising would need to occur for that to become a
              reality. The philosophies and shifts are not fixed, instead they
              are narratives that thread through the different dimensions of our
              Ecosystem Matrix, as we seek to test them in different contexts.
            </p>
            <h2 className="heading-4xl text-grey-1">Worldview philosophies</h2>
            <div className="grid grid-cols-1 gap-10 py-8 sm:grid-cols-3 ">
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Rooted in the recognition of the full web of life
                </h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From violence, scarcity and separation to a thriving planetary
                  community of interbecoming. <br />
                  <span
                    onClick={() => setOpenNE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NE
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenRC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    RC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenPC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    PC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenCD(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    CD
                  </span>
                  <span className="align-super text-[9px] uppercase">S</span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Grounded in a non-bounded understanding of value
                </h3>
                <p className="p-lg-regular  text-grey-6 opacity-60">
                  From extractive profit-driven goals to entangled,
                  intergenerational and distributed value systems. <br />
                  <span
                    onClick={() => setOpenNE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NE
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenCS(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    CS
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenBE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    BE
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenM0(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    M0
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenCD(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    CD
                    <span className="align-super text-[9px] uppercase">S</span>
                  </span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Enabled by technological ecosystems of care
                </h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From the utilitarian ‘othering’ of technology to animistic
                  interfaces of wisdom and care.{' '}
                  <span
                    onClick={() => setOpenNE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NE
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenNZ(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NZ
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenCT(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    CT
                  </span>
                  <span className="align-super text-[9px] uppercase">S</span>
                </p>
              </div>
            </div>

            <h2 className="heading-4xl text-grey-1">
              Proposed structural shifts
            </h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 py-8 sm:grid-cols-3">
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Beyond Property
                </h3>
                <p className="p-lg-regular  text-grey-6 opacity-60">
                  From exerting control over ‘objects’ to seeking reciprocal
                  relationships with the full web of life. <br />
                  <span
                    onClick={() => setOpenPB(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    PB
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenRC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    RC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">Beyond Labour</h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From humans employed as resources to vocations of creativity,
                  purpose and care.{' '}
                  <span
                    onClick={() => setOpenNE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NE
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenSG(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    7G
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenETC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    LC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenOD(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    OD
                  </span>
                  <span className="align-super text-[9px] uppercase">S</span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Beyond Extraction
                </h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From extractive resource claims to the infinite guardianship
                  of the global commons. <br />
                  <span
                    onClick={() => setOpenSM(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    SM
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenM0(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    M0
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenPC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    PC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenRE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    RN
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Beyond Private Contracts
                </h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From linear agreements that optimise for the few to
                  multi-party, dynamic, digital treaties of respect. <br />
                  <span
                    onClick={() => setOpenBR(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    BTR
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenRC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    RC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>{' '}
                  <span
                    onClick={() => setOpenETC(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    LC
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>
                </p>
              </div>
              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Beyond Governance
                </h3>
                <p className="p-lg-regular  text-grey-6 opacity-60">
                  From centralised enforcement to nurturing institutions of
                  stewardship. <br />
                  <span
                    onClick={() => setOpenQD(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    SD
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenBR(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    BTR
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenNZ(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NZ
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>
                </p>
              </div>

              <div>
                <h3 className="p-lg-regular pb-3 text-grey-6">
                  Beyond Monetary Capital
                </h3>
                <p className="p-lg-regular text-grey-6 opacity-60">
                  From the accumulation of financial wealth to a social contract
                  that regeneratively stewards the diverse capitals of life.{' '}
                  <br />
                  <span
                    onClick={() => setOpenCS(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    CS
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenNE(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    NE
                  </span>
                  <span className="align-super text-[9px] uppercase">L</span>{' '}
                  <span
                    onClick={() => setOpenSG(true)}
                    className="font-SaansMed hover:cursor-crosshair"
                  >
                    7G
                  </span>
                  <span className="align-super text-[9px] uppercase">A</span>
                </p>
              </div>
            </div>
          </div>

          <hr className="text-[#333333]" />

          <div className="pb-60 pt-20">
            <h1 className="heading-7xl max-w-[22.8rem] pb-10 text-grey-5 ">
              Help us build a better future
            </h1>
            <div className="flex gap-8">
              <DMButton internal href="/contact">
                Contact
              </DMButton>
              {/* <DMButton href="https://glorious-impact-532915.framer.app/contribute">
                  Contribute
                </DMButton> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
