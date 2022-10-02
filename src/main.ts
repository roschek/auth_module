import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function start () {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
      .setTitle("Бек на nest js")
      .setDescription("REST API свагер")
      .setVersion('0.0.1')
      .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
  await app.listen(PORT, () => console.log(`server started at port: ${PORT}`))
}

start()
