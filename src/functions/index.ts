import {
  app,
  type HttpRequest,
  type InvocationContext,
  type HttpResponseInit,
} from "@azure/functions";

const hello = async (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> => {
  return {
    body: "New world.",
  };
};

app.http("hello", {
  methods: ["GET"],
  handler: hello,
});
