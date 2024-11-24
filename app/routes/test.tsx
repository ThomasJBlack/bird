import { Box, Button } from "@radix-ui/themes";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import { type ActionFunctionArgs, json, redirect } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const questions = String(formData.getAll("questions"));
  console.log(`asdf 🧐 ~ questions:`, questions);

  const errors = {};

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Redirect to dashboard if validation is successful
  return redirect("/dashboard");
}

export const loader = async () => {
  const questions = [
    {
      text: "What is your name?",
    },
    {
      text: "What is your quest?",
    },
    {
      text: "What is your favorite color?",
    },
  ];

  return { questions };
};

export default function Test() {
  const { questions } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();
  console.log(`asdf 🧐 ~ data:`, data);
  return (
    <>
      <Form action="/test">
        {questions.map((question, index) => (
          <Box p="3" key={index}>
            <label>{question.text}</label>
            <input type="text" name={`question-${index}`}></input>
          </Box>
        ))}
        <Button type="submit" variant="soft">
          Submit
        </Button>
      </Form>
    </>
  );
}
