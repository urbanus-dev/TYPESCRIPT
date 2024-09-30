type Album2 = 'rock' | "one night"
const Album: Album2 = "one night"
const HandleAlbum = (album: Album2) => {

}
HandleAlbum(Album)
// Album = "country";  Cannot assign to 'Album' because it is a constant.

type AlbumAttributes = {
    status: "new-release" | "on-sale" | "staff-pick";
};
const update = (attri: AlbumAttributes) => { }
update.status = 'on-sale'
update({
    status: 'on-sale'
})

//read only attributes
interface AlbumAttributes1 {
    readonly status: "new-release" | "on-sale" | "staff-pick";
    readonly id: number;
    readonly artist: string;
};
const update = (attri: AlbumAttributes) => { }
update.status = 'on-sale'
update({
    status: 'on-sale'
})

type Album = {
    title: string,
    artist: string,
    status2: string
}

const readonlyObj: Readonly<Album> = {
    title: "The Beatles (White Album)",
    artist: "The Beatles",
    status2: "staff-pick"
}
// readonlyObj.title="The Beatles (White Album" Cannot assign to 'title' because it is a read-only property

const fruits:readonly string[]=["hello","3"]
// fruits.push("ovaco") Property 'push' does not exist on type 'readonly string[]'


