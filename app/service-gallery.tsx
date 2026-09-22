"use client";

import Image from "next/image";
import { Images } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Service } from "@/app/content";

type ServiceGalleryProps = {
  title: string;
  photos: NonNullable<Service["photos"]>;
  triggerLabel: string;
};

export function ServiceGallery({
  title,
  photos,
  triggerLabel,
}: ServiceGalleryProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="service-gallery-trigger"
          type="button"
          aria-label={`Ver fotos de ${title}`}
        >
          <Images aria-hidden="true" />
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="service-gallery-dialog">
        <DialogHeader className="service-gallery-header">
          <p className="service-gallery-kicker">Resultados reais</p>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Conheça alguns resultados reais do meu trabalho.
          </DialogDescription>
        </DialogHeader>

        <div className="service-gallery-grid">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="service-gallery-photo"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 767px) 88vw, 30vw"
              />
              {photo.label ? <figcaption>{photo.label}</figcaption> : null}
            </figure>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
