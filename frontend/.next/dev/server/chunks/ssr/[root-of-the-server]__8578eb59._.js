module.exports = [
"[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/frontend/lib/data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/app/materi/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/materi/[id]/page.js
__turbopack_context__.s([
    "default",
    ()=>MateriDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/data.js [app-rsc] (ecmascript)");
;
;
function formatTanggal(tanggal) {
    if (!tanggal) return "";
    const date = new Date(tanggal);
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    return date.toLocaleDateString("id-ID", options);
}
async function MateriDetailPage(props) {
    // unwrap params karena sekarang Promise
    const params = await props.params;
    const id = params.id;
    const materi = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMateriById"])(id);
    if (!materi) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen p-8 bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 font-semibold",
                    children: "Materi tidak ditemukan"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/materi/[id]/page.js",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/materi/[id]/page.js",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    // Ambil file dari kolom 'file' di database
    const fileUrl = materi.file;
    const isPDF = fileUrl && fileUrl.toLowerCase().endsWith(".pdf");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-8 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl text-gray-900 font-bold",
                    children: materi.judul
                }, void 0, false, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700",
                    children: materi.isi
                }, void 0, false, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                materi.tanggal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm",
                    children: [
                        "Tanggal: ",
                        formatTanggal(materi.tanggal)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                fileUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border-t pt-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold text-gray-800",
                            children: "File Materi:"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/materi/[id]/page.js",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        isPDF ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: fileUrl,
                                    className: "w-full h-96 border rounded",
                                    title: "Preview PDF"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: fileUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-block text-blue-600 hover:underline",
                                    children: "📄 Buka PDF di tab baru"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/materi/[id]/page.js",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: fileUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                            children: "📎 Buka File Materi"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/materi/[id]/page.js",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 pt-4 border-t",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/materi",
                        className: "inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition",
                        children: "← Kembali ke Daftar Materi"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/materi/[id]/page.js",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/materi/[id]/page.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/materi/[id]/page.js",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/materi/[id]/page.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/app/materi/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/materi/[id]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8578eb59._.js.map