import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Phone, MessageSquare, Mail, Dna, Heart, MessageCircle, PawPrint, ShieldAlert, Pill, Activity, HeartHandshake } from 'lucide-react';
const Demo = () => {






    return (
        <main className="min-h-screen bg-[#EDEEE2] px-4 py-10">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-xl">
                <section className="relative h-[600px] ">
                    <img
                        src="https://i.imgur.com/qF1EoxU.jpgs"
                        alt="demo pies"
                        className="h-full w-full object-cover "
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white">
                        <span className="rounded-full bg-[#738F6D]/80 px-3 py-1 text-sm font-semibold">
                            Pies • Wrocław
                        </span>

                        <h1 className="mt-4 text-5xl font-bold">
                            Burek
                        </h1>

                        <p className="mt-2 ml-1 text-sm text-white/90">
                            3 lata • Samiec
                        </p>
                    </div>
                </section>

                <section className="bg-[#E0E3D5] px-8 py-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 min-h-14 min-w-14 items-center justify-center rounded-full bg-[#738F6D] text-white">
                            <Heart size={26} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900">
                                Znalazłeś mnie? Dziękuję!
                            </h2>
                            <p className="mt-1 text-zinc-700">
                                Skontaktuj się proszę z moim opiekunem - odbierze mnie najszybciej jak to możliwe!
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        <button className="flex items-center justify-center gap-2 rounded-full bg-[#738F6D] px-5 py-3 font-semibold text-white">
                            <Phone size={18} />
                            <span>Zadzwoń</span>
                        </button>

                        <button className="flex items-center justify-center gap-2 rounded-full border border-[#b9b9b5] bg-[#EDEEE2] px-5 py-3 font-semibold text-black">
                            <MessageSquare size={18} className="translate-y-[1px]" />
                            <span>SMS</span>
                        </button>



                        <button className="flex items-center justify-center gap-2 rounded-full bg-[#738F6D] px-5 py-3 font-semibold text-white">
                            <Mail size={18} />
                            <span>Email</span>
                        </button>
                    </div>
                </section>

                {/* about pet */}

                <section className="bg-[#E0E3D5] px-8 py-8">
                    <h2 className="text-2xl font-bold text-zinc-900">
                        O Burek
                    </h2>

                    <p className="mt-4 leading-7 text-zinc-700">
                        To jest przykładowy opis Twojego zwierzaka
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs gap-1.5 flex items-center font-bold uppercase tracking-wide text-zinc-500">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E0E3D5]">
                                    <PawPrint size={18} color="#738F6D" />
                                </span>  Gatunek
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                Pies
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">

                            <p className="text-xs gap-1.5 flex items-center font-bold uppercase tracking-wide text-zinc-500">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E0E3D5]">
                                    <Dna size={18} color="#738F6D" />
                                </span> Rasa
                            </p>

                            <p className="mt-1 font-semibold text-zinc-900">
                                Kundelek
                            </p>
                        </div>
                    </div>
                </section>

                {/* medical info */}
                <section className="bg-[#E0E3D5] px-8 py-8">
                    <h2 className="text-2xl font-bold text-zinc-900">
                        Informacje medyczne
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <ShieldAlert size={16} color="#738F6D" />
                                Alergie
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                Przykładowe alergie Twojego pupila
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <Pill size={16} color="#738F6D" />
                                Przyjmowane leki
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                Leki które przyjmuje zwierzak
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <Activity size={16} color="#738F6D" />
                                Choroby przewlekłe
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                Przewlekłe choroby zwierzaka (Mam nadzieje, że nie musisz tego uzupełniać!)
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <HeartHandshake size={16} color="#738F6D" />
                                Weterynarz
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                Tu możesz podać kontakt do weterynarza u którego Twój pupil sie leczy
                            </p>
                        </div>
                    </div>

                </section>

                <footer className="bg-[#E0E3D5] px-8 py-6 text-center text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} AnimalFind
                </footer>
            </div>
        </main>
    );
};

export default Demo;