import Image from "next/image";
import Grid from "./Grid";

export default function Home() {
  return (
    <div className="overflow-hidden w-screen">
      <Grid />
      <div className="bg-black pb-80">
        <div className="flex justify-between p-4">
          <div className="flex gap-6">
            <p className="font-bold text-2xl text-white">IBM iX</p>
            <div className="flex gap-6 text-white text-lg sm:hidden">
              {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
                return <p key={i}>Home</p>;
              })}
            </div>
          </div>
          <p className="text-white">DE</p>
        </div>
        <div className="py-24 grid grid-cols-2 max-w-5xl mx-auto gap-12">
          <div className="gap-12 flex-col flex">
            <p className="text-7xl text-white gap-2 flex flex-col">
              Experience <span className="text-blue-600">matters</span>
            </p>
            <p className="text-white text-3xl">
              We are IBM iX, the experience agency of IBM Consulting. A new kind
              of agency, accelerated by a century of human-centred tech
              expertise.
            </p>
          </div>
          <div className="">
            <Image
              src="https://ibmix.de/wp-content/uploads/2022/02/dmexco-messestand-ibm-ix.jpg"
              alt="img"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full -mt-80 justify-center">
        <Image
          src="https://ibmix.de/wp-content/uploads/2022/02/Thumbnail_iX-film.jpg"
          alt="img"
          width={1200}
          height={1200}
        />
      </div>{" "}
      <div className="grid grid-cols-4 my-24 gap-8">
        <div></div>
        <div className="flex flex-col gap-12 text-lg p-7">
          <p>
            We are helping to shape a sustainable future: with products,
            services and experiences that connect people.
          </p>
          <p>
            IBM iX is a consultancy, digital agency, design studio and tech
            company all rolled into one.
          </p>
          <p>
            We are team players and change agents, combining our creative spirit
            with speed, in-depth industry knowledge and the technological power
            of IBM – with more than 1,200 experts in Germany, Austria and
            Switzerland.
          </p>
          <button className="bg-blue-600 w-fit p-3 text-white ">
            More about us
          </button>
        </div>
        <div className="mt-24">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/ueber-uns_personen-smartphone.jpg"
            alt="img"
            width={1400}
            height={1200}
          />
        </div>
        <div>
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/dmexco-messestand-ibm-ix.jpg"
            alt="img"
            width={900}
            height={700}
          />
        </div>
      </div>
      <marquee
        width="100%"
        direction="left"
        className="text-7xl font-thin text-blue-600 mb-24"
      >
        <i>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum
          dolorum expedita saepe nulla! Unde molestias, tempora at quos quod
          totam voluptatum facilis velit placeat optio inventore similique ab
          recusandae?
        </i>
      </marquee>
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex gap-12">
            <p className="whitespace-nowrap pt-4">Our Services</p>
            <p className="text-7xl font-thin pb-44 relative">
              The complete digital{" "}
              <span
                className="absolute right-32 top-20 whitespace-nowrap
              "
              >
                experience package
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-12 text-3xl font-thin">
            <p>
              We offer all skills and end-to-end services to successfully effect
              digital change together.
            </p>
            <p>
              Our teams guide people, brands and organisations in an agile and
              collaborative way: from analysis and concept via business case,
              design vision and MVP development to roll-out and operations.
            </p>
            <button className="bg-blue-600 text-base w-fit p-3 text-white ">
              More about us
            </button>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="mx-auto max-w-7xl my-24">
        {[
          [
            "Digital business consulting",
            "Strategic and technological advice for digital transformation in marketing, sales, services and commerce",
          ],
          [
            "Experience design & communications",
            "Research, ideation, service design, UX/UI design, content and campaigns for brands, digital products and holistic customer experiences",
          ],
          [
            "Engineering & development",
            "Front- and backend engineering and implementation of digital experience platforms (DXP), custom development and mobile services",
          ],
          [
            "Workflows & operations",
            "New ways-of-working, programme management, workflows and operations as well as business process outsourcing",
          ],
        ].map((item, i) => {
          return (
            <>
              <hr />
              <div key={i} className="grid grid-cols-2 gap-4 py-6">
                <h1 className="text-3xl font-thin flex flex-col  justify-center">
                  {item[0]}
                </h1>
                <p className="text-2xl font-thin">{item[1]}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="bg-black text-white pt-24">
        {" "}
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <div className="flex gap-12">
              <p className="whitespace-nowrap pt-4">Our Services</p>
              <p className="text-7xl font-thin pb-44 relative">
                The complete digital{" "}
                <span
                  className="absolute right-32 top-20 whitespace-nowrap
              "
                >
                  experience package
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-12 text-3xl font-thin">
              <p>
                We offer all skills and end-to-end services to successfully
                effect digital change together.
              </p>

              <button className="bg-blue-600 text-base w-fit p-3 text-white ">
                More about us
              </button>
            </div>
          </div>
        </div>
        <Image
          src="https://ibmix.de/wp-content/uploads/2022/06/iX-showreel-thumbnail-n.jpg"
          alt="img"
          width={1200}
          height={1200}
          className="mx-auto mt-24"
        />
        <div className="flex gap-12 overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300 mx-auto max-w-fit px-80">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/11/uvex_Teaser.png"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/10/teaser-GROHE-X.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/05/IBMiX_Hands_Apps_CovPass_CovPass-Check-copyright@stefanhobmaier.com_.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="	https://ibmix.de/wp-content/uploads/2022/02/iXDACH_Teaser_Case_Hyundai.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/see-more-ix-stuff-1.svg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
        </div>
        <marquee width="100%" direction="left" className="mb-20">
          <div className="flex">
            {[
              {
                src: "/logo1.svg",
              },
              {
                src: "/5.svg",
              },
              {
                src: "/6.svg",
              },
              {
                src: "/4.svg",
              },
            ].map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item.src}
                  alt="img"
                  width={200}
                  height={200}
                  className="mx-auto mt-24"
                />
              );
            })}
          </div>
        </marquee>
      </div>
      <div className="grid grid-cols-7 my-24 gap-8 pt-48 relative">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex gap-24 absolute pl-8 -top-2">
            <p className="whitespace-nowrap pt-4">Industry expertise</p>
            <p className="text-7xl font-thin  relative whitespace-nowrap">
              Industry knowledge?
              <span
                className="absolute right-64 top-20 whitespace-nowrap
              "
              >
                We bring it with us
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-12 text-lg p-7">
            <p>
              We are helping to shape a sustainable future: with products,
              services and experiences that connect people.
            </p>
            <p>
              IBM iX is a consultancy, digital agency, design studio and tech
              company all rolled into one.
            </p>
            <p>
              We are team players and change agents, combining our creative
              spirit with speed, in-depth industry knowledge and the
              technological power of IBM – with more than 1,200 experts in
              Germany, Austria and Switzerland.
            </p>
            <button className="bg-blue-600 w-fit p-3 text-white ">
              More about us
            </button>
          </div>
        </div>

        <div className="mt-24 col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/iXDACH_branchen-meeting.jpg"
            alt="img"
            width={1400}
            height={1200}
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/iXDACH_branchen-field-service.jpg"
            alt="img"
            width={900}
            height={700}
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-7 my-24 gap-8 pt-48 relative">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex gap-24 absolute pl-8 -top-2">
            <p className="whitespace-nowrap pt-4">Industry expertise</p>
            <p className="text-7xl font-thin  relative whitespace-nowrap">
              Industry knowledge?
              <span
                className="absolute right-64 top-20 whitespace-nowrap
              "
              >
                We bring it with us
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-12 text-lg p-7">
            <p>
              Sustainable business models require future-proof technology and
              open eco-systems based on a flexible architecture. Sounds complex?
              It is!
            </p>
            <p>
              We advise progressively and agnostically, based on our
              long-standing premium partnerships with leading providers of
              digital experience, sales, CRM and commerce software.
            </p>
            <p>
              What makes us unique is our comprehensive expertise in development
              and implementation, certified by independent analysts; not to
              mention our passion as IBMers and tech nerds.
            </p>
            <button className="bg-blue-600 w-fit p-3 text-white ">
              More about us
            </button>
          </div>
        </div>

        <div className="mt-24 col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/08/Technology-partner-workshop.jpg"
            alt="img"
            width={1400}
            height={1200}
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/iXDACH_branchen-field-service.jpg"
            alt="img"
            width={900}
            height={700}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <div className="flex gap-12">
              <p className="whitespace-nowrap pt-4">Our Services</p>
              <p className="text-7xl font-thin pb-44 relative">
                The complete digital{" "}
                <span
                  className="absolute right-32 top-20 whitespace-nowrap
              "
                >
                  experience package
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-12 overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300 mx-auto max-w-fit px-80">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/11/uvex_Teaser.png"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/10/teaser-GROHE-X.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/05/IBMiX_Hands_Apps_CovPass_CovPass-Check-copyright@stefanhobmaier.com_.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="	https://ibmix.de/wp-content/uploads/2022/02/iXDACH_Teaser_Case_Hyundai.jpg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/see-more-ix-stuff-1.svg"
            alt="img"
            width={600}
            height={600}
            className="mx-auto mt-24"
          />
        </div>
      </div>
      <div className="grid grid-cols-7 my-32 bg-black text-white gap-8 pb-32 pt-80 relative">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex gap-24 absolute pl-16 -top-2 pt-32">
            <p className="whitespace-nowrap pt-4">Industry expertise</p>
            <p className="text-7xl font-thin  relative whitespace-nowrap">
              Industry knowledge?
              <span
                className="absolute right-64 top-20 whitespace-nowrap
              "
              >
                We bring it with us
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-12 text-base pl-20">
            <p>
              Sustainable business models require future-proof technology and
              open eco-systems based on a flexible architecture. Sounds complex?
              It is!
            </p>
            <p>
              We advise progressively and agnostically, based on our
              long-standing premium partnerships with leading providers of
              digital experience, sales, CRM and commerce software.
            </p>
            <p>
              What makes us unique is our comprehensive expertise in development
              and implementation, certified by independent analysts; not to
              mention our passion as IBMers and tech nerds.
            </p>
            <button className="bg-blue-600 w-fit p-3 text-white ">
              More about us
            </button>
          </div>
        </div>

        <div className="mt-24 col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/karriere-talk.jpg"
            alt="img"
            width={1400}
            height={1200}
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://ibmix.de/wp-content/uploads/2022/02/karriere-woman-dog.jpg"
            alt="img"
            width={900}
            height={700}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <div className="flex gap-12">
              <p className="whitespace-nowrap pt-4">Our Services</p>
              <p className="text-7xl font-thin pb-44 relative">
                The complete digital{" "}
                <span
                  className="absolute right-32 top-20 whitespace-nowrap
              "
                >
                  experience package
                </span>
                <button className="bg-blue-600 w-fit p-3 text-base text-white mt-32">
                  More about us
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto text-white grid grid-cols-3 ">
          <div className="col-span-1 flex flex-col justify-around">
            <div>
              <Image src="/logo11.svg" alt="img" width={80} height={80} />
              <p className="text-3xl py-6">IBM iX</p>
              <p className="text-base max-w-[15rem]">
                The Experience Agency of IBM Consulting
              </p>
            </div>
            <Image
              src="/logo22.svg"
              alt="img"
              width={60}
              height={60}
              className="mt-12"
            />
          </div>
          <div className="col-span-2">
            <div className="max-w-3xl grid grid-cols-4 ">
              <div className="flex flex-col">
                <p className="pb-6 text-gray-400">Subscribe</p>
                {[
                  "LinkedIn",
                  "Xing",
                  "YouTube",
                  "Instagram",
                  "Twitter",
                  "dev.to",
                  "WeAreDevelopers",
                  "Meetup",
                ].map((item, i) => {
                  return <p key={i}>{item}</p>;
                })}
              </div>
              <div className="flex flex-col">
                <p className="pb-6 text-gray-400">Initiative</p>
                {["LinkedIn", "Xing", "YouTube", "Instagram"].map((item, i) => {
                  return <p key={i}>{item}</p>;
                })}
              </div>
              <div className="flex flex-col">
                <p className="pb-6 text-gray-400">Global network</p>
                {[
                  "LinkedIn",
                  "Xing",
                  "YouTube",
                  "Instagram",
                  "Twitter",
                  "dev.to",
                ].map((item, i) => {
                  return <p key={i}>{item}</p>;
                })}
              </div>
              <div className="flex flex-col pb-12">
                <p className="pb-6 text-gray-400">Community</p>
                {[
                  "LinkedIn",
                  "Xing",
                  "YouTube",
                  "Instagram",
                  "Twitter",
                  "dev.to",
                  "WeAreDevelopers",
                  "Meetup",
                ].map((item, i) => {
                  return <p key={i}>{item}</p>;
                })}
              </div>{" "}
              {/* <hr /> */}
            </div>
            <div className="divide-y max-w-3xl divide-gray-600">
              <p></p>
              <p></p>
            </div>
            <div className="py-12 flex flex-col gap-4">
              <p className="text-gray-400">Newletters</p>
              <p className="max-w-3xl">
                Fresh breeze for your inbox: Stay up to date on news, events and
                thought leadership topics from the digital world.
              </p>
              <div className="flex w-full pt-6">
                <div class="flex items-center border-zinc-400 bg-zinc-800 py-2 max-w-4xl px-5">
                  <input
                    className="text-xs bg-transparent outline-none w-full"
                    type={"text"}
                    placeholder={"Your E-mail"}
                  />
                </div>
                <button className="bg-gray-300 py-4 px-4 text-gray-700">
                  Sign up now
                </button>
              </div>
              <div className="flex gap-6">
                {" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="flex flex-col h-full items-start justify-start mt-1"
                />
                <p className="text-[11px] max-w-sm">
                  You agree that IBM iX may contact you on trending topics,
                  events and marketing offers. You can revoke this consent at
                  any time e. g. via mail to marketing@ibmix.de. More on data
                  privacy here. IBM iX consists of IBM iX Berlin GmbH,
                  Chausseestraße 5, Berlin, Germany, IBM iX Dusseldorf GmbH,
                  Plange Muehle 1, Dusseldorf, Germany, IBM iX Austria GmbH,
                  Carl-Blum-Strasse 3, Wels, Austria, IBM iX Genf GmbH, Rue
                  Eugène-Marziano 25, Genf, Switzerland, IBM iX Switzerland
                  GmbH, Vulkanstrasse 106, Zuerich, Switzerland and IBM iX
                  Croatia d.o.o, Kapucinski trg 5, Varaždin, Croatia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
