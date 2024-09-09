import { DemonstrativeVideo } from './VideoSectionStyles';
import SectionVideo from '../../../../assets/background_video.mp4'

export function VideoSection() {
    return (
        <>
        <DemonstrativeVideo autoPlay loop muted playsInline>
            <source src={SectionVideo} type="video/mp4"/>
        </DemonstrativeVideo>
        </>
    )
}