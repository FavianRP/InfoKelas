module.exports = [
"[project]/lib/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addJadwal",
    ()=>addJadwal,
    "addMateri",
    ()=>addMateri,
    "addTugas",
    ()=>addTugas,
    "deleteJadwal",
    ()=>deleteJadwal,
    "deleteMateri",
    ()=>deleteMateri,
    "deleteTugas",
    ()=>deleteTugas,
    "fetchMateri",
    ()=>fetchMateri,
    "fetchMateriById",
    ()=>fetchMateriById,
    "getAllJadwal",
    ()=>getAllJadwal,
    "getAllTugas",
    ()=>getAllTugas,
    "updateMateri",
    ()=>updateMateri,
    "updateTugas",
    ()=>updateTugas
]);
const API_URL = "http://localhost:5000"; // backend SQLite
function getTokenHeader() {
    if ("TURBOPACK compile-time truthy", 1) return {}; // supaya SSR tidak error
    //TURBOPACK unreachable
    ;
    const token = undefined;
}
async function getAllTugas() {
    const res = await fetch(`${API_URL}/tugas`, {
        headers: getTokenHeader(),
        cache: "no-store"
    });
    return res.json();
}
async function addTugas(tugas) {
    const res = await fetch(`${API_URL}/tugas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function deleteTugas(id) {
    const res = await fetch(`${API_URL}/tugas/${id}`, {
        method: "DELETE",
        headers: getTokenHeader()
    });
    return res.json();
}
async function updateTugas(id, tugas) {
    const res = await fetch(`${API_URL}/tugas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function getAllJadwal() {
    const res = await fetch(`${API_URL}/jadwal`, {
        headers: getTokenHeader(),
        cache: 'no-store'
    });
    return res.json();
}
async function addJadwal(data) {
    const res = await fetch(`${API_URL}/jadwal`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteJadwal(id) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: 'DELETE',
        headers: getTokenHeader()
    });
    return res.json();
}
async function fetchMateri() {
    try {
        const res = await fetch(`${API_URL}/materi`, {
            headers: getTokenHeader()
        });
        if (!res.ok) throw new Error("Gagal fetch materi");
        return res.json();
    } catch (error) {
        console.error("Error fetchMateri:", error);
        return [];
    }
}
async function fetchMateriById(id) {
    try {
        const res = await fetch(`${API_URL}/materi/${id}`, {
            headers: getTokenHeader()
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetchMateriById:", error);
        return null;
    }
}
async function addMateri(data) {
    const res = await fetch(`${API_URL}/materi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function updateMateri(id, data) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteMateri(id) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "DELETE",
        headers: getTokenHeader()
    });
    return res.json();
}
}),
"[project]/app/components/TugasList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TugasList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function TugasList({ initialTugas }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tugas, setTugas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTugas || []);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        judul: "",
        deskripsi: "",
        deadline: ""
    });
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const role = localStorage.getItem("role");
        setIsAdmin(role === "admin");
    }, []);
    const handleAdd = async (e)=>{
        e.preventDefault();
        if (!isAdmin) return;
        setLoading(true);
        try {
            const newTugas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTugas"])({
                ...form,
                status: "Belum Selesai"
            });
            setTugas([
                ...tugas,
                newTugas
            ]);
            setForm({
                judul: "",
                deskripsi: "",
                deadline: ""
            });
        } catch (err) {
            console.error(err);
            alert("Gagal menambahkan tugas");
        }
        setLoading(false);
    };
    const handleDelete = async (id)=>{
        if (!isAdmin) return;
        if (!confirm("Apakah yakin ingin menghapus tugas ini?")) return;
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteTugas"])(id);
            setTugas(tugas.filter((t)=>t.id !== id));
        } catch (err) {
            console.error(err);
            alert("Gagal menghapus tugas");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAdd,
                className: "p-4 bg-gray-100 rounded-lg shadow space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg text-gray-800",
                        children: "Tambah Tugas"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Judul",
                        value: form.judul,
                        onChange: (e)=>setForm({
                                ...form,
                                judul: e.target.value
                            }),
                        className: "w-full border p-2 rounded text-gray-800",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Deskripsi",
                        value: form.deskripsi,
                        onChange: (e)=>setForm({
                                ...form,
                                deskripsi: e.target.value
                            }),
                        className: "w-full border p-2 rounded text-gray-800",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: form.deadline,
                        onChange: (e)=>setForm({
                                ...form,
                                deadline: e.target.value
                            }),
                        className: "w-full border p-2 rounded text-gray-800",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition",
                        children: loading ? "Menyimpan..." : "Tambah"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TugasList.js",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: tugas.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-800",
                                        children: t.judul
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TugasList.js",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: t.deskripsi
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TugasList.js",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Deadline: ",
                                            t.deadline
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TugasList.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TugasList.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDelete(t.id),
                                className: "text-red-500 hover:text-red-700 font-bold cursor-pointer",
                                children: "Hapus"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TugasList.js",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/TugasList.js",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TugasList.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_9a1ac15e._.js.map