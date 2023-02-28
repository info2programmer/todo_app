import TodoCard from "./TodoCard"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
        <div>
            {/* @ts-ignore */}
            <TodoCard />
        </div>
        <div className="flex-1">{children}</div>
    </main>
  )
}
