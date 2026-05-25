export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 group">
      <img
        src="/logo.png.png"
        alt="Scanvio"
        className="w-14 h-14 rounded-2xl object-contain shrink-0"
      />
      <span className="text-xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors duration-200">
        Scanvio
      </span>
    </a>
  )
}
