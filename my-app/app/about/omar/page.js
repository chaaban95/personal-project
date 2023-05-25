import { prisma } from "@/app/lib/db";
import Comments from "@/components/Comments";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Omar",
};

function getComments() {
  return prisma.comment.findMany();
}

async function addComment(data) {
  "use server";
  const title = data.get("title")?.valueOf();
  const content = data.get("comment")?.valueOf();

  if (content.length < 3 || title.length < 3) {
    throw new Error("Comment and title must have at least 3 characters");
  }

  await prisma.comment.create({ data: { title, content } });
  redirect("/about/omar");
}

export default async function Author() {
  const comments = await getComments();
  // await prisma.comment.create({ data: { title: "Comment" } });
  return (
    <>
      <h4 className="breadCrumb">About / Author</h4>
      <main>
        <h1>Author: Omar</h1>
        <section>
          <h2>Add a comment</h2>
          <form action={addComment}>
            <label for="title">Title:</label>
            <br></br>
            <input type="text" name="title" id="title"></input>
            <br></br>
            <label for="comment">Comment:</label>
            <br></br>
            <textarea name="comment" id="comment" cols="30" rows="4"></textarea>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section>
          <h2>Comments</h2>
          {comments.map((comment) => (
            <Comments {...comment} />
          ))}
        </section>
      </main>
    </>
  );
}
