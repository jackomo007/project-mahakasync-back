import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./filters/http-exception.filter";
import { ResponseInterceptor } from "./interceptors/response.intercertor";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { createServer, Server } from "http";

let server: Server;

async function createAppInstance() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.enableCors({
    origin: true,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("Project Mahasync API")
    .setDescription("API documentation for Mahasync Platform")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  await app.init();
  server = createServer(app.getHttpAdapter().getInstance());
}

export default async function handler(req: any, res: any) {
  if (!server) {
    await createAppInstance();
  }
  server.emit("request", req, res);
}
