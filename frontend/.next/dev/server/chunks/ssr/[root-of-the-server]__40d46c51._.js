module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/lib/data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>updateMateri,
    "updateTugas",
    ()=>updateTugas
]);
const API_URL = "http://localhost:5000"; // backend SQLite
function getTokenHeader() {
    const token = localStorage.getItem("token");
    return token ? {
        "Authorization": `Bearer ${token}`
    } : {};
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
        headers: getTokenHeader()
    });
    return res.json();
}
async function addJadwal(data) {
    const res = await fetch(`${API_URL}/jadwal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function updateJadwal(id, jadwal) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(jadwal)
    });
    return res.json();
}
async function deleteJadwal(id) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "DELETE",
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
"[project]/app/components/MateriList.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/MateriList.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/MateriList.js <module evaluation>", "default");
}),
"[project]/app/components/MateriList.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/MateriList.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/MateriList.js", "default");
}),
"[project]/app/components/MateriList.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MateriList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/MateriList.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MateriList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/MateriList.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MateriList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/materi/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MateriPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MateriList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MateriList.js [app-rsc] (ecmascript)");
;
;
;
async function MateriPage() {
    let semuaMateri = [];
    try {
        semuaMateri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMateri"])();
    } catch (error) {
        console.error("Error fetch materi:", error);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-8 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl text-gray-900 font-bold mb-4",
                    children: "Daftar Materi"
                }, void 0, false, {
                    fileName: "[project]/app/materi/page.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MateriList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    initialMateri: semuaMateri
                }, void 0, false, {
                    fileName: "[project]/app/materi/page.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/materi/page.js",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/materi/page.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/materi/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/materi/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40d46c51._.js.map