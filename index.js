import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const app = jsonServer.create();
const router = jsonServer.router("db.json");

const rules = auth.rewriter({
	users: 600,
	messages: 640,
});

app.db = router.db;

app.use(rules);
app.use(cors());
app.use(auth);
app.use(router);
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on 3000 `);
});
