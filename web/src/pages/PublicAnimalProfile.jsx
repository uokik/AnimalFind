import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Phone, MessageSquare, Mail, Dna, Heart, MessageCircle, PawPrint, ShieldAlert, Pill, Activity, HeartHandshake } from 'lucide-react';
const PublicAnimalProfile = () => {

    function ageFormatting(year) {
        if (year === undefined || year === null) {
            return "Brak danych";
        }

        const parsedYear = Number(year);

        if (parsedYear === 1) {
            return "1 rok";
        }

        const lastDig = parsedYear % 10;
        const lasttwoDig = parsedYear % 100;

        if (lasttwoDig >= 11 && lasttwoDig <= 14) {
            return parsedYear + " lat";
        }

        if (lastDig >= 2 && lastDig <= 4) {
            return parsedYear + " lata";
        }

        return parsedYear + " lat";
    }

    const { uid } = useParams();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchAnimal = async () => {
            try {
                setLoading(true);
                setError("");
                setAnimal(null);

                const API_URL = import.meta.env.VITE_API_URL;
                const response = await fetch(`${API_URL}/animal/${uid}`);

                if (response.status === 404) {
                    setError("404");
                    return;
                }

                if (!response.ok) {
                    setError("problem z pobieraniem profilu");
                    return;
                }

                const data = await response.json();
                setAnimal(data);
            } catch (err) {
                setError("nie udalo sie polaczyc z serwerem");
            } finally {
                setLoading(false);
            }
        };

        fetchAnimal();
    }, [uid]);

    if (loading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!animal) {
        return <div>Brak danych profilu.</div>;
    }


    return (
        <main className="min-h-screen bg-[#EDEEE2] px-4 py-10">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-xl">
                <section className="relative h-[600px] ">
                    <img
                        src={animal.profile_image_url}
                        alt={animal.name}
                        className="h-full w-full object-cover "
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white">
                        <span className="rounded-full bg-[#738F6D]/80 px-3 py-1 text-sm font-semibold">
                            {animal.species}  •  {animal.city}
                        </span>

                        <h1 className="mt-4 text-5xl font-bold">
                            {animal.name}
                        </h1>

                        <p className="mt-2 ml-1 text-sm text-white/90">
                            {ageFormatting(animal.age)} • {animal.sex}
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
                        O {animal.name}
                    </h2>

                    <p className="mt-4 leading-7 text-zinc-700">
                        {animal.personality || "Brak dodatkowego opisu."}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs gap-1.5 flex items-center font-bold uppercase tracking-wide text-zinc-500">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E0E3D5]">
                                    <PawPrint size={18} color="#738F6D" />
                                </span>  Gatunek
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                {animal.species}
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">

                            <p className="text-xs gap-1.5 flex items-center font-bold uppercase tracking-wide text-zinc-500">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E0E3D5]">
                                    <Dna size={18} color="#738F6D" />
                                </span> Rasa
                            </p>

                            <p className="mt-1 font-semibold text-zinc-900">
                                {animal.breed || "Nie podano"}
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
                                {animal.allergies || "Nie podano"}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <Pill size={16} color="#738F6D" />
                                Przyjmowane leki
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                {animal.medications || "Nie podano"}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <Activity size={16} color="#738F6D" />
                                Choroby przewlekłe
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                {animal.chronic_conditions || "Nie podano"}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#d3d4ca] bg-[#EDEEE2] p-5">
                            <p className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wide text-zinc-500">
                                <HeartHandshake size={16} color="#738F6D" />
                                Weterynarz
                            </p>
                            <p className="mt-1 font-semibold text-zinc-900">
                                {animal.vet_info || "Nie podano"}
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

export default PublicAnimalProfile;