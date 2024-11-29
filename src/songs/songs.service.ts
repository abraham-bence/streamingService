import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class SongsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.songs.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.songs.findUnique({
      where: { id },
    });
  }

  async create(data : CreateSongDto ) {
    return this.prisma.songs.create({
      data,
    });
  }

  async update(id: number, data: UpdateSongDto) {
    return this.prisma.songs.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.songs.delete({
      where: { id },
    });
  }
  async freeSongs() {
    return this.prisma.songs.findMany({
      where : {price : 0}
    })
  }
}

