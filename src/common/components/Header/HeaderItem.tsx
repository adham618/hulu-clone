import { ReactElement, SVGProps } from "react"

interface HeaderItemProps {
  title: string,
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement<any, any>
}


const HeaderItem = ({ title, Icon }: HeaderItemProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-white group  w-12 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce -tracking-widest" />
      <p className="opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  )
}
export default HeaderItem