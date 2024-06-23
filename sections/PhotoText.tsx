import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <div>
  <div className="bg-slate-600">Hello {name}</div>
  <div>
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/725px-Adidas_Logo.svg.png"
      class="w-full h-full object-cover"
      width={800}
      height={1200}
    />
  </div>
  </div>
}