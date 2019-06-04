import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './home-layout/index/header/header.component';
import { BannerComponent } from './home-layout/index/banner/banner.component';
import { ListMovieComponent } from './home-layout/index/list-movie/list-movie.component';
import { ListfilmNewComponent } from './home-layout/index/listfilm-new/listfilm-new.component';
import { ItemListnewComponent } from './home-layout/index/listfilm-new/item-listnew/item-listnew.component';
import { ItemFilmComponent } from './home-layout/index/item-film/item-film.component';
import { FilmDangchieuComponent } from './home-layout/index/film-dangchieu/film-dangchieu.component';
import { NewsComponent } from './home-layout/index/news/news.component';
import { FooterComponent } from './home-layout/index/footer/footer.component';
import { IndexComponent } from './home-layout/index/index.component';
import { ChitietVeComponent } from './home-layout/chitiet-ve/chitiet-ve.component';
import { DatgheComponent } from './home-layout/datghe/datghe.component';
import { ItemGheComponent } from './home-layout/datghe/item-ghe/item-ghe.component';
import { CommentPhimComponent } from './home-layout/index/news/comment-phim/comment-phim.component';
import { SendmailComponent } from './home-layout/datghe/sendmail/sendmail.component';
@NgModule({
  declarations: [IndexComponent, HeaderComponent, BannerComponent, ListMovieComponent,
     ListfilmNewComponent, ItemListnewComponent, NewsComponent, FooterComponent, 
     ItemFilmComponent, FilmDangchieuComponent,HomeLayoutComponent, ChitietVeComponent, DatgheComponent, ItemGheComponent, CommentPhimComponent, SendmailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [IndexComponent,HeaderComponent, BannerComponent, ListMovieComponent,
    ListfilmNewComponent, ItemListnewComponent, NewsComponent, FooterComponent,
    ItemFilmComponent,FilmDangchieuComponent,HomeLayoutComponent,ChitietVeComponent,
    DatgheComponent
  ]
})
export class HomeModule { }
