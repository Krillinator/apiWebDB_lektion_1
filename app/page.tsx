export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className=" ">Hello world!</p>

        <p>Summan: {4 + 4} </p>
        <p> {4 > 2 ? <h1>TITLE</h1> : <h2>SubuTitle</h2>} </p>
      </div>
    </main>
  );
}
