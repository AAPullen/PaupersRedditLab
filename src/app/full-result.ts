export interface FullResult {
    data: Posts;
}

export interface Posts {
    children: SinglePost[];
}

export interface SinglePost {
    data: SinglePostData;
}

export interface SinglePostData {
    title: string;
    permalink: string;
    url: string;
    is_video: boolean;
    media: {
        reddit_video: {
            fallback_url: string;
        }
    }
}