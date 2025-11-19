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
    "updateJadwal",
    ()=>updateJadwal,
    "updateMateri",
    ()=>updateMateri
]);
const API_URL = "http://localhost:5000"; // backend SQLite
async function getAllTugas() {
    const res = await fetch(`${API_URL}/tugas`, {
        cache: "no-store"
    });
    return res.json();
}
async function addTugas(tugas) {
    const res = await fetch("http://localhost:5000/tugas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function deleteTugas(id) {
    const res = await fetch(`http://localhost:5000/tugas/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
async function getAllJadwal() {
    const res = await fetch(`${API_URL}/jadwal`, {
        cache: "no-store"
    });
    return res.json();
}
async function addJadwal(jadwal) {
    const res = await fetch(`${API_URL}/jadwal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jadwal)
    });
    return res.json();
}
async function updateJadwal(id, jadwal) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jadwal)
    });
    return res.json();
}
async function deleteJadwal(id) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
async function fetchMateri() {
    try {
        const res = await fetch(`${API_URL}/materi`);
        if (!res.ok) throw new Error("Gagal fetch materi");
        return res.json();
    } catch (error) {
        console.error("Error fetchMateri:", error);
        return [];
    }
}
async function fetchMateriById(id) {
    const res = await fetch(`${API_URL}/materi/${id}`);
    if (!res.ok) return null;
    return res.json();
}
async function addMateri(data) {
    const res = await fetch(`${API_URL}/materi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function updateMateri(id, data) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteMateri(id) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "DELETE"
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
    const [tugas, setTugas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTugas);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        judul: "",
        deskripsi: "",
        deadline: ""
    });
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cek role saat mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const role = localStorage.getItem('role');
        setIsAdmin(role === 'admin'); // true jika admin, false jika bukan
    }, []);
    // Tambah Tugas
    const handleAdd = async (e)=>{
        e.preventDefault();
        if (!isAdmin) return; // non-admin tidak bisa menambah
        const newTugas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTugas"])({
            judul: form.judul,
            deskripsi: form.deskripsi,
            deadline: form.deadline,
            status: "Belum Selesai"
        });
        setTugas([
            ...tugas,
            {
                id: newTugas.id,
                ...form,
                status: "Belum Selesai"
            }
        ]);
        setForm({
            judul: "",
            deskripsi: "",
            deadline: ""
        });
    };
    // Hapus Tugas
    const handleDelete = async (id)=>{
        if (!isAdmin) return; // non-admin tidak bisa hapus
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteTugas"])(id);
        setTugas(tugas.filter((t)=>t.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAdd,
                className: "p-4 bg-gray-100 text-gray-900 rounded-lg shadow space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg",
                        children: "Tambah Tugas"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 56,
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
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Deskripsi",
                        value: form.deskripsi,
                        onChange: (e)=>setForm({
                                ...form,
                                deskripsi: e.target.value
                            }),
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: form.deadline,
                        onChange: (e)=>setForm({
                                ...form,
                                deadline: e.target.value
                            }),
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer",
                        children: "Tambah"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TugasList.js",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: tugas.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 bg-gray-100 text-gray-900 rounded-lg shadow flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: t.judul
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TugasList.js",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: t.deskripsi
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TugasList.js",
                                        lineNumber: 101,
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
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TugasList.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDelete(t.id),
                                className: "text-red-600 hover:underline cursor-pointer",
                                children: "Hapus"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TugasList.js",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/app/components/TugasList.js",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/TugasList.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TugasList.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_9a1ac15e._.js.map