import { Controller, Get, Param, Body, Post } from "@nestjs/common"; // get ve controller importlarını yapıyoruz
import { CreatePersonDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";

@Controller("users") // request uri
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get() // isteğin türü get, post, delete, put (örnek request postman: localhost:3000/users)
    getAll() {
        return this.userService.findAll();
    }


    @Get(":id") // örnek request postman: localhost:3000/users/123
    getOne(@Param("id") id) { // x değişken ismi id'yi alıp atayacak
        return `This id -> ${id}`;
    }

    @Post() // post requesti biliyorsun zaten :D
    create(@Body() x: CreatePersonDto) { // Dto ile alacağımız requestin body kısmını bir dataya eşleştirdik ki alacağımız body type valueları belli olsun örnek string number alalım gibi
        return `User created. Username is: ${x.username}`;
    }
}

// direkt bunu oluşturduktan sonra nest js bundan haberdar olması için main.ts'e haber vermemiz lazım
/**
 * yani şunu demek istiyorum nest.js bütün dosyaları tek tek okumuyor sen eğer main.ts'e bunu oku dersen
 * bunu okumaya başlar ve kaynak yönetimi sağlamış olursun. Ama main.ts'de AppModule'a gittiği için senin AppModule içerisine import
 * etmen gerekiyor.
 */