export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-text-muted text-sm">
        &copy; {new Date().getFullYear()} Roxy. Built with React & Three.js.
      </p>
    </footer>
  )
}
