import Parser from 'rss-parser';
import ogs from 'open-graph-scraper';
import { defineEventHandler } from 'h3';
import { ImageObject } from 'open-graph-scraper/lib/types';

export default defineEventHandler(async (event: any) => {
    const posts = await new Parser().parseURL(`https://medium.com/feed/@${event.context.params.id}`);
   
    return await Promise.all(posts.items.map(async item => {
        const { result } = await ogs({url: `${item.link}`});
        item['image'] = (result.ogImage as ImageObject)?.url;
        return item;
    }));
})