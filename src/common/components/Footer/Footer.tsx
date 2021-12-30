interface FooterProps {

}

const Footer = ({ }: FooterProps) => {
  return (
    <footer className="text-center bg-[#061c20] p-4 py-10">
      © {new Date().getFullYear()} Copyright: <a href="https://adhamtarek.vercel.app" target="_blank" rel="noreferrer">Adham Tarek</a>
    </footer>
  )
}
export default Footer