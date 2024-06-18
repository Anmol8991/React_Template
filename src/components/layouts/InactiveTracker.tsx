import useAuth from '@/utils/hooks/useAuth'
import React, { useEffect, useState } from 'react'

interface InactivityTrackerProps {
    logoutThresholdInMinutes: number
}

const InactivityTracker: React.FC<InactivityTrackerProps> = ({
    logoutThresholdInMinutes,
}) => {
    const { signOut } = useAuth()
    const [lastActiveTime, setLastActiveTime] = useState<number>(
        parseInt(localStorage.getItem('lastActiveTime') || '') || Date.now()
    )

    const handleActivity = () => {
        const currentTime = Date.now()
        setLastActiveTime(currentTime)
        localStorage.setItem('lastActiveTime', currentTime.toString())
        resetTimer()
    }

    const resetTimer = () => {
        const currentTime = Date.now()
        setLastActiveTime(currentTime)
        localStorage.setItem('lastActiveTime', currentTime.toString())
    }

    useEffect(() => {
        // Set up event listeners for user activity
        document.addEventListener('mousemove', handleActivity)
        document.addEventListener('keypress', handleActivity)
        document.addEventListener('click', handleActivity)
        document.addEventListener('scroll', handleActivity)

        // Start the timer
        const interval = setInterval(() => {
            const currentTime = Date.now()
            const timeDiffInMinutes =
                (currentTime - lastActiveTime) / (1000 * 60)

            if (timeDiffInMinutes >= logoutThresholdInMinutes) {
                // Perform your logout action here (e.g., clear session, redirect to login page)
                console.log(
                    'User has been inactive for too long. Logging out...'
                )
                // Add your logout logic here
                signOut()
                // Clear the interval to stop the timer
                clearInterval(interval)
            }
        }, 1000 * 60) // Check every minute

        return () => {
            // Clean up the event listeners when the component unmounts
            document.removeEventListener('mousemove', handleActivity)
            document.removeEventListener('keypress', handleActivity)
            document.removeEventListener('click', handleActivity)
            document.removeEventListener('scroll', handleActivity)
            clearInterval(interval)
        }
    }, [lastActiveTime, logoutThresholdInMinutes])

    return null // Since it's a utility component, we don't need to render anything
}
export default InactivityTracker
