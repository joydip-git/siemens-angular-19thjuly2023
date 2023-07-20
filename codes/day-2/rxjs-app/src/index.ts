import axios from "axios";
import { Post } from "./post";
import { BehaviorSubject, Observable, Subject, Subscription, filter, map, of } from "rxjs";

const fetchData = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return resp
    } catch (error) {
        console.log(error)
    }
}
fetchData()

const posts: Post[] = [{
    "userId": 9,
    "id": 89,
    "title": "sint soluta et vel magnam aut ut sed qui",
    "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
},
{
    "userId": 9,
    "id": 90,
    "title": "ad iusto omnis odit dolor voluptatibus",
    "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
},
{
    "userId": 10,
    "id": 91,
    "title": "aut amet sed",
    "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
},
{
    "userId": 10,
    "id": 92,
    "title": "ratione ex tenetur perferendis",
    "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
},
{
    "userId": 10,
    "id": 93,
    "title": "beatae soluta recusandae",
    "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
}];

function getData() {
    const postsObs: Observable<Post[]> = of(posts)
    return postsObs
}

const s: Subscription = getData()
    .subscribe({
        next: (allPosts) => { console.log(allPosts) },
        error: (e) => console.log(e),
        complete: () => { }
    })

//s.unsubscribe()

const subject = new BehaviorSubject<string>('')
const obs = subject.asObservable()
subject.next('siemens')
obs.subscribe((data) => console.log(data))
obs.subscribe({
    next: (data) => console.log(data),
    error: (e) => console.log(e)
})

