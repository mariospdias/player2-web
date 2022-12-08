import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-esport-gradient self-stretch rounded-lg overflow-hidden mt-16 lg:mt-8 md:mt-16">
            <div className="bg-[#2A2634] px-8 py-6 flex flex-col sm:flex-row md:justify-between items-center sm:gap-6">
                <div>
                    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                </div>
                <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 mt-4 sm:mt-0">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}