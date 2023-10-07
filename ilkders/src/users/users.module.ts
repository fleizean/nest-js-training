import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module ({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService],   // beraber çalışacak yapıları belirtmek gerekiyor
})

export class UsersModule {}

/**
 * burada kendi module dosyamızı yaptık böylece kodumuz daha clean gözükecek ve anlaşılabilir olacak
 * daha sonrasında ize app.module.ts ana dosyamıza gidip bunu import edeceğiz bu şekilde artık programın bizim yazdığımız controllerdan
 * haberi olacak.
 */